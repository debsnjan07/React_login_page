import react from "react";

function Pizza(){
    return(
        <>
         <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-4xl font-bold tracking-tight text-amber-300 ">Create your Own Pizza</h2>
        
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="group relative">
                <img src="https://res.cloudinary.com/hksqkdlah/image/upload/SFS_chicago_deep_dish_pizza-16_cehf9d.jpg" alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"></img>
                <div class="mt-4 flex justify-between">
                    <div>
                        <h3 class="text-sm  text-amber-50">
                            <a href="#">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                               ChiagoStylePizza
                            </a>
                        </h3>
                        <p class="mt-1 text-sm text-white">Fresh</p>
                        <button className=" text-teal-400 box-border-white ">Order</button>
                    </div>
                    <p class="text-sm font-medium text-amber-50">₹300</p>
                     
                    </div>
            </div>
            <div class="group relative">
                <img src="https://www.allrecipes.com/thmb/MQIuAFCtBJWiX9zk5Peh5Z1yTFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/70801_BrickOvenPizzaBrooklynStyle_ddmfs_3x4_3852-2ef5d5e09aa6401d8041dc0a32c8aa27.jpg" alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"></img>
                <div class="mt-4 flex justify-between">
                    <div>
                        <h3 class="text-sm  text-amber-50">
                            <a href="#">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                               BricOvenPizza
                            </a>
                        </h3>
                        <p class="mt-1 text-sm text-white">Fresh</p>
                        <button className=" text-teal-400 box-border-white ">Order</button>
                    </div>
                    <p class="text-sm font-medium text-amber-50">₹350</p>
                    </div>
            </div>
            <div class="group relative">
                <img src="https://st3.idealista.it/news/archivie/styles/fullwidth_xl/public/2022-10/media/image/aurelien-lemasson-theobald-x00czbt4dfk-unsplash.jpg?VersionId=V5HNX7jAzvpmOwawvIKLGNATTI3v_m09&itok=KeH-F7_2" alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"></img>
                <div class="mt-4 flex justify-between">
                    <div>
                        <h3 class="text-sm  text-amber-50">
                            <a href="#">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                               ItalianStylePizza
                            </a>
                        </h3>
                        <p class="mt-1 text-sm text-white">Fresh</p>
                       <button className=" text-teal-400 box-border-white ">Order</button>
                    </div>
                    <p class="text-sm font-medium text-amber-50">₹450</p>

                    </div>
            </div>
            <div class="group relative">
                <img src="https://cookingwithwineblog.com/wp-content/uploads/2023/12/Neapolitan-Pizza-Dough-Recipe-Featured-1.jpg" alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"></img>
                <div class="mt-4 flex justify-between">
                    <div>
                        <h3 class="text-sm  text-amber-50">
                            <a href="#">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                               NeapolitanPizza
                            </a>
                        </h3>
                        <p class="mt-1 text-sm text-white">Fresh</p>
                        <button className=" text-teal-400 box-border-white ">Order</button>
                    </div>
                    <p class="text-sm font-medium text-amber-50">₹250</p>
                    </div>
            </div>
            
        </div>
        </div>
        </>
    )
}

export default Pizza;