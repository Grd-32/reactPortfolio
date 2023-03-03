import Reviews from "./views/review"

export default function ReviewsClass() {
    const myReviews = [
        {
            image: "",
            name: "Daniel Dennis",
            title: "Software engineer",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima tempore alias fugit ipsum in minus perspiciatis tempora, quasi vero inventore, libero, dolorem odio laudantium necessitatibus repudiandae voluptatem odit recusandae quos labore quo sunt."
        },
        {
            image: "",
            name: "Catherine Ratemo",
            title: "Angular developer | GDSC lead MKU",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima tempore alias fugit ipsum in minus perspiciatis tempora, quasi vero inventore, libero, dolorem odio laudantium necessitatibus repudiandae voluptatem odit recusandae quos labore quo sunt."
        },
        {
            image: "",
            name: "Billy Okeyo",
            title: "Backend engineer",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima tempore alias fugit ipsum in minus perspiciatis tempora, quasi vero inventore, libero, dolorem odio laudantium necessitatibus repudiandae voluptatem odit recusandae quos labore quo sunt."
        }
    ]

    return (
        <Reviews
            myReviews = {myReviews}
         />
    )
}