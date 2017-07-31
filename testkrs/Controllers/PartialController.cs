using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization;
using System;
using System.Linq;
using testkrs.Data;
using testkrs.Models;

namespace testkrs.Controllers
{
    public class PartialController : Controller
    {
        private readonly IStringLocalizer<PartialController> _localizer;
        private readonly Data.FinalDbContext _context;

        public PartialController(IStringLocalizer<PartialController> localizer, Data.FinalDbContext context)
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
        
        public JsonResult GetData()
        {           
            return Json(_context.Instructions.ToList());
        }
    }
}
