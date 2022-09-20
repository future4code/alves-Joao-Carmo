class Recipe {
    constructor(
        private id:string,
        private title:string,
        private description:string,
        private date:string,
        private author_id:string,
    ){}

    public getId(){
        return this.id
    }

    public getTitle(){
        return this.title
    }

    public getDescription(){
        return this.description
    }

    public getDate(){
        return this.date
    }

    public getAuthorId(){
        return this.author_id
    }
}

export default Recipe