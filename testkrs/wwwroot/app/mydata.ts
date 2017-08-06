export class Mydata {
    instructionId: number;
    InstructionId: number;
    instructionImage: string;
    instructionTitle: string;
    instructionName: string;
    hashtegs: string ;
    instructionRang: number ;
    instructionCategory: string;   
    instructionPopularity: number;
    authorId: number;
}

export class Mycategory {
    categoriesId: number;
    CategoriesId: number;
    categoriesName: string;
}

export class Myhashteg {
    hashtegId: number;
    HashtegId: number;
    HashtegName: string;
}

export class Mystep {
    InstructionSteppId: number;
    instructionStepId: number;
    instructionPath: number;
    numStep: number;
}

export class Myblock {
    blockId: number;
    BlockId: number;
    stepPath: number;
    imageContent: string;
    textComtent: string;
    youtoubeUrl: string;
}

export class Mycomment {
    commentId: number;
    CommentId: number;
    commentRang: number;
    commentType: string;
    commentName: string;
    commentText: string;
    userPath: string;
    commentDate: Date;
}

export class Mymedal {
    MedalId: number;
    ImageMedal: string;
    userPath: number;
    typeMedal: string;
    rangMedal: number;
}

export class Myprofile {
    ProfileId: number;
    avaProfile: string;
    roots: string;
    nikProfile: string;
    numOfComments: number;
    numOfInstructions: number;
}