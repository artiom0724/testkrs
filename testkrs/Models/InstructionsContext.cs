using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace testkrs.Models
{
    public class InstructionsContext : DbContext
    {
        public InstructionsContext(DbContextOptions<InstructionsContext> options)
            : base(options)
        { }

        public DbSet<Block> Blocks { get; set; }
        public DbSet<Instruction> Instructions { get; set; }
        public DbSet<InstructionStep> Steps { get; set; }
    }

    public class Instruction
    {
        public int InstructionId { get; set; }
        public string instructionTitle { get; set; }
        public string instructionsName { get; set; }
        public string hashtegs { get; set; }
        public int BlogId { get; set; }
        public double instructionRang { get; set; }
        public List<InstructionStep> Steps { get; set; }
    }

    public class InstructionStep
    {
        public int StepId { get; set; }
        public string instructionPath { get; set; }
        public int numStep { get; set; }
        public List<Block> Blocks { get; set; }
    }

    public class Block
    {
        public int BlockId;
        public string stepPath;
        public string imageContent { get; set; }
        public string textComtent { get; set; }
        public string youtoubeUrl { get; set; }
    }
}
