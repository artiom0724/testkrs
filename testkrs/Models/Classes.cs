using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace testkrs.Models
{   
    public class Profile
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ProfileId { get; set; }
        public string roots { get; set; }
        public int numOfComments { get; set; }
        public int numOfInstructions { get; set; }
    }

    public class Categories
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        private int CategoriesId{ get; set; }    
        public int categoriesId { get; set; }
        public string categoriesName { get; set; }
    }
    public class Instruction
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        private int instructionId { get; set; }
        public int InstructionId { get; set; }
        public string instructionTitle { get; set; }
        public string instructionsName { get; set; }
        public string hashtegs { get; set; }
        public double instructionRang { get; set; }
        public string instructionCategory { get; set; }
        //public List<InstructionStep> Steps { get; set; }
    }

    public class InstructionStep
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        private int InstructionSteppId { get; set; }
        public int instructionStepId { get; set; }
        public string instructionPath { get; set; }
        public int numStep { get; set; }
        //public List<Block> Blocks { get; set; }
    }

    public class Block
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        private int blockId { get; }
        public int BlockId { get; set; }
        public string stepPath { get; set; }
        public string imageContent { get; set; }
        public string textComtent { get; set; }
        public string youtoubeUrl { get; set; }
    }

    public class Comment
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        private int commentId { get; }
        public int CommentId { get; set; }
        public string commentType { get; set; }//instr or step
        public string commentName { get; set; }
        public string commentText { get; set; }
    }

}
