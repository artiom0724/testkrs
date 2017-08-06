using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using testkrs.Models;

namespace testkrs.Data
{
    public class FinalDbContext : DbContext
    {
        public FinalDbContext(DbContextOptions<FinalDbContext> options)
            : base(options)
        { }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<Hashteg> Hashtegs { get; set; }
        public DbSet<Categories> Categoriess { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Block> Blocks { get; set; }
        public DbSet<Medal> Medals { get; set; }
        public DbSet<Instruction> Instructions { get; set; }
        public DbSet<InstructionStep> Steps { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Profile>().ToTable("Profile");
            modelBuilder.Entity<Hashteg>().ToTable("Hashteg");
            modelBuilder.Entity<Categories>().ToTable("Categories");
            modelBuilder.Entity<Comment>().ToTable("Comment");
            modelBuilder.Entity<Block>().ToTable("Block");
            modelBuilder.Entity<Medal>().ToTable("Medal");
            modelBuilder.Entity<Instruction>().ToTable("Instruction");
            modelBuilder.Entity<InstructionStep>().ToTable("InstructionStep");
        }
    }   
}
