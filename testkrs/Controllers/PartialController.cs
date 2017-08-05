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

        public IActionResult ContactComponent() => PartialView();

        public IActionResult IndexComponent() => PartialView();
        //For IndexComponent::::::::::::::::::::::::::
        public JsonResult GetData()//General Instructions
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
        //::::::::::::::::::::::::::::::::::::::::::::::

        public JsonResult GetAboutInstruction(int _instructionId)
        {
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

        public JsonResult GetStepsComments(string _instructionName)
        {
            return Json(_context.Comments.ToList().FindAll(x => (x.commentName == _instructionName && x.commentType == "Step")));
        } 

        public IActionResult Register()
        {
            return View();
        }

        public IActionResult Login()
        {
            return View();
        }
    }
}
