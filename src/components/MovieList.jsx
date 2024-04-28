

export default function MovieList({movies,favoriteComponent,handleFavoriteClick}){

    const FavoriteComponent = favoriteComponent

    return (
        <>
            {movies.map((movie,index)=> (
                <div key={index} className=" group/parent flex justify-self-center  m-3 relative transition-all hover:cursor-pointer hover:scale-[1.1]">
                    <img src={movie.Poster} alt="" className="min-w-[230px] md:min-w-[350px] md:max-h-[300px]"/>
                    <div
                        onClick={()=> handleFavoriteClick(movie)}
                        className=" group-hover/parent:opacity-100 absolute text-white bg-[#000000c7] w-full transition-all opacity-0 bottom-0 text-[20px] p-5 text-center ">
                        <FavoriteComponent />
                    </div>
                </div> 
            ))}
        </>
    )
}
