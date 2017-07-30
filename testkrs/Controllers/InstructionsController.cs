using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using testkrs.Data;
using Microsoft.EntityFrameworkCore;

namespace testkrs.Controllers
{
    public class InstructionsController : Controller
    {
        private readonly FinalDbContext _context;

        public InstructionsController(FinalDbContext context)
        {
            _context = context;
            var temp = context.Instructions.ToList().ElementAtOrDefault(0).instructionsName;
        }

        public ActionResult GetNameInstr()
        {
            return Json(_context.Instructions.ToList().ElementAt(0).instructionsName);
        }
        public async Task<IActionResult> Index()
        {
            return View(await _context.Instructions.ToListAsync());
        }
    }
}