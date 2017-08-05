using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using testkrs.Data;
using testkrs.Models;
using testkrs.Services;
using System.Globalization;
using Microsoft.AspNetCore.Localization;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.FileProviders;
using System.IO;
using Microsoft.AspNetCore.SpaServices.Webpack;

namespace testkrs
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                // For more details on using the user secret store see https://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets<Startup>();
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddDbContext<FinalDbContext>(options => 
                options.UseSqlServer(Configuration.GetConnectionString("NoDefCon")));
           
            services.AddIdentity<ApplicationUser, IdentityRole>(config =>
            {
                config.SignIn.RequireConfirmedEmail = true;
            })
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddLocalization(options => options.ResourcesPath = "Resources");
            services.AddMvc()
                .AddDataAnnotationsLocalization()
                .AddViewLocalization();
            services.Configure<RequestLocalizationOptions>(options =>
            {
                var supportedCultures = new[]
                {
                    new CultureInfo("en"),
                    new CultureInfo("ru")
                };

                options.DefaultRequestCulture = new RequestCulture("ru");
                options.SupportedCultures = supportedCultures;
                options.SupportedUICultures = supportedCultures;
            });
            
            // Add application services.
            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<ISmsSender, AuthMessageSender>();

            services.Configure<AuthMessageSenderOptions>(Configuration);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, FinalDbContext context)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
                
            app.UseStaticFiles();

            app.UseIdentity();

            app.UseDeveloperExceptionPage();

            SocialAutentifications(app);
            // Add external authentication middleware below. To configure them please see https://go.microsoft.com/fwlink/?LinkID=532715
            ConfigureMyLocalization(app);

            app.UseDefaultFiles();
         
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, "node_modules")),
                RequestPath = "/node_modules"
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute("spa-fallback", new { controller = "home", action = "index" });
            });
            context.Database.EnsureCreated();
        }

        public void ConfigureMyLocalization(IApplicationBuilder app)
        {
            var locOptions = app.ApplicationServices.GetService<IOptions<RequestLocalizationOptions>>();
            app.UseRequestLocalization(locOptions.Value);          
        }

        public void SocialAutentifications(IApplicationBuilder app)
        {
            app.UseFacebookAuthentication(new FacebookOptions
            {
                AppId = "784489228379055",
                AppSecret = "a7683f83ccf132add0ea51884fdf9efb",
                AuthenticationScheme = "Facebook"
            });

            app.UseTwitterAuthentication(new TwitterOptions
            {
                ConsumerKey = "hN2orQqMoos4FX9qQL32rWRB6",
                ConsumerSecret = "Ct1JOqv6WzTam7O2EgIv4WYkonQjecHUwtNqWIJt4ftLwP1Zuf"
            });

            app.UseGoogleAuthentication(new GoogleOptions
            {
                ClientId = "953159431162-4kcj8oeh4p9n8abs7rqu672bojaplp1n.apps.googleusercontent.com",
                ClientSecret = "TmGLlJYDwueUvJfLmNKIyjgV"
            });

            app.UseVkontakteAuthentication(new Brik.Security.VkontakteMiddleware.VkontakteOptions
            {
                ClientId = "6104997",
                ClientSecret = "ZsVxEY8O0ez3LHfi5OjO",
                AuthenticationScheme = "Vkontakte"
            });
        }
    }
}
