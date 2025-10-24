//host our component here

// conditionally rendered based on user interactions go in app directory but static components rendered regardless dont go inside app you make it app but new dir
export default function AboutPage(){
    return(
        // tailwind has worst run time efficiency
        // rem is height and width should be based on the root directory but the root styling hasn't been made yet and it could hurt the design
        <div className={`flex flex-col justify-center items-center bg-red-300 p-2`}>
            <h1>I am a student</h1>
            <p>
                I love this class.
            </p>
        </div>
    )
}