using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using TodoAPI.Models;
using TodoAPI.Services;
using System.Text;
using System.Configuration;

namespace TodoAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            //services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);


            services.Configure<TodoListDatabaseSettings>(
                Configuration.GetSection(nameof(TodoListDatabaseSettings)));

            services.AddSingleton<ITodoListDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<TodoListDatabaseSettings>>().Value);
            
            services.AddSingleton<TodoService>();

            services.Configure<ReceitaListDatabaseSettings>(
                Configuration.GetSection(nameof(ReceitaListDatabaseSettings)));

            services.AddSingleton<IReceitaListDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<ReceitaListDatabaseSettings>>().Value);
            
            services.AddSingleton<ReceitaService>();

            services.AddControllers();
            //services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(c => c.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader());

            //app.UseAuthentication();
            //app.UseAuthorization();
            

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
