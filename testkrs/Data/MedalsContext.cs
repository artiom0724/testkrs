using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using testkrs.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace testkrs.Data
{
    public class MedalsContext : DbContext
    {
        public MedalsContext(DbContextOptions<MedalsContext> options)
            : base(options)
        { }

        public DbSet<Medal> Medals { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Medal>().ToTable("Medal");
        }
    }
}
