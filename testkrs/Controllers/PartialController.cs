using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization;
using System;
using System.Collections.Generic;
using System.Linq;
using testkrs.Data;
using testkrs.Models;

namespace testkrs.Controllers
{
    public class PartialController : Controller
    {
        private readonly IStringLocalizer<PartialController> _localizer;
        private readonly FinalDbContext _context;       

        public PartialController(IStringLocalizer<PartialController> localizer, FinalDbContext context)
        {           
            _context = context;
            _localizer = localizer;
        }
        [HttpPost]
        public IActionResult SetLanguage(string culture, string returnUrl)
        {
            Response.Cookies.Append(
                CookieRequestCultureProvider.DefaultCookieName,
                CookieRequestCultureProvider.MakeCookieValue(new RequestCulture(culture)),
                new CookieOptions { Expires = DateTimeOffset.UtcNow.AddYears(1) }
            );
         
            return LocalRedirect("/home");
        }
      
        public IActionResult AboutComponent() => PartialView();
        
       
        public IActionResult AppComponent() => PartialView();

        public IActionResult RedactorComponent() => PartialView();

        public IActionResult IndexComponent() => PartialView();
        //For IndexComponent::::::::::::::::::::::::::
        public JsonResult GetData()//Get Title Instructions
        {
            return Json(ChooseArrayInstructions(_context.Instructions.ToList()));
        }

        public JsonResult GetCategories()
        {
            return Json(_context.Categoriess.ToList());
        }

        public JsonResult GetHashtegs()
        {
            return Json(_context.Hashtegs.ToList());
        }

        public List<Instruction> ChooseArrayInstructions(List<Instruction> instructions)
        {
            List<Instruction> tempInstructions = new List<Instruction>();
            tempInstructions = ChoosePopularytyInstructions(instructions, tempInstructions);
            tempInstructions = ChooseLastChangedInstructions(instructions, tempInstructions);
            tempInstructions = ChooseMaxReytingInstructions(instructions, tempInstructions);
            return tempInstructions;
        }

        public List<Instruction> ChoosePopularytyInstructions(List<Instruction> instructions, List<Instruction> tempInstructions)
        {
            int j = 0;
            int[] temp = new int[instructions.Count], noI = { -1, -1, -1, -1 };
            for (int i = 0; i < instructions.Count; i++)
                temp[i] = instructions.ElementAt(i).instructionPopularity;
            Array.Sort(temp);
            Array.Reverse(temp);
            for (int i = 0; i < instructions.Count; i++)
                if (instructions.ElementAt(i).instructionPopularity == temp[j] && j != 4)
                {
                    if (i != noI[0] && i != noI[1] && i != noI[2] && i != noI[3])
                    {
                        tempInstructions.Add(instructions.ElementAt(i));
                        noI[j] = i;
                        j++;
                        i = -1;
                    }
                }
                else if (j == 4) break;
            return tempInstructions;
        }

        public List<Instruction> ChooseLastChangedInstructions(List<Instruction> instructions, List<Instruction> tempInstructions)
        {
            int j = 0;
            int[] noI = { -1, -1, -1, -1 };
            DateTime[] temp = new DateTime[instructions.Count];
            for (int i = 0; i < instructions.Count; i++)
                temp[i] = instructions.ElementAt(i).instructionTime;
            Array.Sort(temp);
            Array.Reverse(temp);
            for (int i = 0; i < instructions.Count; i++)
                if (instructions.ElementAt(i).instructionTime == temp[j] && j != 4)
                {
                    if (i != noI[0] && i != noI[1] && i != noI[2] && i != noI[3])
                    {
                        tempInstructions.Add(instructions.ElementAt(i));
                        noI[j] = i;
                        j++;
                        i = -1;
                    }
                }
                else if (j == 4) break;
            return tempInstructions;
        }

        public List<Instruction> ChooseMaxReytingInstructions(List<Instruction> instructions, List<Instruction> tempInstructions)
        {
            int j = 0;
            int[] noI = { -1, -1, -1, -1 };
            double[] temp = new double[instructions.Count];
            for (int i = 0; i < instructions.Count; i++)
                temp[i] = instructions.ElementAt(i).instructionRang;
            Array.Sort(temp);
            Array.Reverse(temp);
            for (int i = 0; i < instructions.Count; i++)
                if (instructions.ElementAt(i).instructionRang == temp[j] && j != 4)
                {
                    if (i != noI[0] && i != noI[1] && i != noI[2] && i != noI[3])
                    {
                        tempInstructions.Add(instructions.ElementAt(i));
                        noI[j] = i;
                        j++;
                        i = -1;
                    }
                }
                else if (j == 4) break;
            return tempInstructions;
        }
        //For AboutComponent:::::::::::::::::::::::::::::::
        
        public JsonResult GetAboutInstruction(int _instructionId)
        {
            foreach (var item in _context.Instructions)
                if (item.InstructionId == _instructionId)
                    item.instructionPopularity += 1;
            _context.SaveChanges();
            return Json(_context.Instructions.ToList().Find(x => x.InstructionId == _instructionId));
        }

        public JsonResult GetInstructionSteps(int _instructionId)
        {
            List<InstructionStep> temp = new List<InstructionStep>(_context.Steps.ToList()
                .FindAll(x => x.instructionPath == _instructionId));
            temp.Sort((x, y) => x.numStep.CompareTo(y.numStep));
            return Json(temp);
        }

        public JsonResult GetStepsBlocks(int _instructionId)
        {
            return Json(_context.Blocks.ToList().FindAll(x => x.stepPath == _instructionId));
        }

        public JsonResult GetInstructionComments(int _instructionId)
        {
            string _instructionName = _context.Instructions.ToList().Find(x => x.InstructionId == _instructionId).instructionsName;
            List<Comment> temp = new List<Comment>(_context.Comments.ToList()
                .FindAll(x => (x.commentName == _instructionName && x.commentType == "Instruction")));
             temp.Sort((x,y) => x.commentDate.CompareTo(y.commentDate));
            return Json(temp);
        }

        public JsonResult GetBlocks(int _instructionId)
        {      
            List<InstructionStep> tempSteps = _context.Steps.ToList().FindAll(x => x.instructionPath == _instructionId);
            List<Block> temp = new List<Block>();
            for (int i = 0; i< tempSteps.Count;i++)            
                foreach(var item in _context.Blocks.ToList().FindAll(x => x.stepPath == tempSteps.ElementAt(i).instructionStepId))               
                    temp.Add(item);
            return Json(temp);
        }

        public JsonResult GetUsersByComments(int _instructionId)
        {
            string _instructionName = _context.Instructions.ToList().Find(x => x.InstructionId == _instructionId).instructionsName;           
            List<Comment> temp = _context.Comments.ToList()
                .FindAll(x => x.commentName == _instructionName);
            List<Profile> returnProfiles = new List<Profile>();
            foreach (var stringItem in temp)
                returnProfiles.Add(_context.Profiles.ToList().Find(x => x.ProfileId == stringItem.userPath));            
            return Json(returnProfiles.GroupBy(x=> x.ProfileId).Select(y=>y.First()));
        }

        public JsonResult GetAuthorInstruction(int _instructionId)
        {
            return (Json(_context.Profiles.ToList().Find(x => x.ProfileId == _context.Instructions.ToList().Find(y => y.InstructionId == _instructionId).authorId)));
        }

        public JsonResult GetCommentsForSteps(int _instructionId)
        {
            string _instructionName = _context.Instructions.ToList().Find(x => x.InstructionId == _instructionId).instructionsName;         
            List<Comment> temp = _context.Comments.ToList()
                .FindAll(x => (x.commentName == _instructionName && x.commentType == "Step"));
            temp.Sort((x, y) => x.commentDate.CompareTo(y.commentDate));
            return Json(temp);
        }
        //::::::::::::::::::::::::::::::::::::::::::::::::
        public JsonResult GetProfile(string _ProfileId)
        {
            return Json(_context.Profiles.ToList().Find(x=> x.ProfileId == _ProfileId));
        }

        public JsonResult GetInstructionByUser(string _userPath)
        {
            List<Instruction> temp = _context.Instructions.ToList().FindAll(x => x.authorId == _userPath);
            temp.Sort((x, y) => x.instructionTime.CompareTo(y.instructionTime));            
            return Json(temp);
        }

        public JsonResult GetPopularityInstruction(string _userPath)
        {
            List<Instruction> temp = _context.Instructions.ToList().FindAll(x => x.authorId == _userPath);           
            temp.Sort((x, y) => x.instructionRang.CompareTo(y.instructionRang));
            if (temp.Count > 0)
                return Json(temp.ElementAt(0));
            else
                return Json(null);
        }
        //:::::::::::::::::::::::::::::::::::::::::::::::::
        public JsonResult GetSearchResult(string _reqest)
        {
            if (_reqest == null) _reqest = " ";
            List<Instruction> temp = new List<Instruction>();
            foreach(var item in _context.Instructions.ToList())            
                if(getFullText(item).Contains(_reqest))                
                    temp.Add(item);               
            
            return Json(temp);
        }

        public string getFullText(Instruction elem)
        {
            return elem.authorId + " " + elem.hashtegs + " " + elem.instructionCategory + " " + elem.instructionsName + " " + elem.instructionTitle;
        }
    }
}
