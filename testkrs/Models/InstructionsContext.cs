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

    public class Categories
    {
        public int categoriesId;
        public string categoriesName;
    }
    public class Instruction
    {
        private int instructionId { get; }
        public int InstructionId { get; set; }
        public string instructionTitle { get; set; }
        public string instructionsName { get; set; }
        public string hashtegs { get; set; }
        public int BlogId { get; set; }
        public double instructionRang { get; set; }
        public string instructionCategory { get; set; }
        public List<InstructionStep> Steps { get; set; }
    }

    public class InstructionStep
    {
        private int stepId { get; }
        public int StepId { get; set; }
        public string instructionPath { get; set; }
        public int numStep { get; set; }
        public List<Block> Blocks { get; set; }
    }

    public class Block
    {
        private int blockId { get; }
        public int BlockId { get; set; }
        public string stepPath { get; set; }
        public string imageContent { get; set; }
        public string textComtent { get; set; }
        public string youtoubeUrl { get; set; }
    }

    public class Comment
    {
        private int commentId { get; }
        public int CommentId { get; set; }
        public string commentType { get; set; }//instr or step
        public string commentName { get; set; }
        public string commentText { get; set; }
    }

}
