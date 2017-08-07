using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace testkrs.Models
{   
    public class Profile
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string ProfileId { get; set; }
        public string avaProfile { get; set; }
        public string roots { get; set; }
        public string nikProfile { get; set; }
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

    public class Hashteg
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        private int HashtegId { get; set; }
        public int hashtegId { get; set; }
        public string HashtegName { get; set; }
    }
    public class Instruction
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        private int instructionId { get; set; }
        public int InstructionId { get; set; }
        public string instructionImage { get; set; }
        public string instructionTitle { get; set; }
        public string instructionsName { get; set; }
        public string hashtegs { get; set; }
        public double instructionRang { get; set; }
        public string instructionCategory { get; set; }
        public int instructionPopularity { get; set; }
        public DateTime instructionTime { get; set; }
        public string authorId { get; set; }
        //public List<InstructionStep> Steps { get; set; }
    }

    public class InstructionStep
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        private int InstructionSteppId { get; set; }
        public int instructionStepId { get; set; }
        public int instructionPath { get; set; }
        public int numStep { get; set; }
        //public List<Block> Blocks { get; set; }
    }

    public class Block
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        private int blockId { get; }
        public int BlockId { get; set; }
        public int stepPath { get; set; }
        public string imageContent { get; set; }
        public string textComtent { get; set; }
        public string youtoubeUrl { get; set; }
    }

    public class Comment
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        private int commentId { get; }
        public int CommentId { get; set; }
        public string userPath { get; set; }
        public string commentType { get; set; }//instr or step
        public int commentNumStep { get; set; }
        public string commentName { get; set; }
        public string commentText { get; set; }
        public double commentRang { get; set; }
        public DateTime commentDate { get; set; }
    }

    public class Medal
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MedalId { get; set; }
        public string ImageMedal { get; set; }
        public int userPath { get; set; }
        public string typeMedal { get; set; }
        public int rangMedal { get; set; }
    }

}
