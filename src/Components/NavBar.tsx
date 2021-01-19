import * as React from "react"

export const NavBar = () => {

    return (
        <nav style={{
            backgroundColor: "#eeeeee"
        }}>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="block lg:hidden h-8 w-auto" src="https://project.ros-cloud.at/wp-content/uploads/2020/07/cropped-roslogo.png" />
                            <img className="hidden lg:block h-8 w-auto" src={require("../assets/ros-logo-lg.png").default} />
                        </div>
                    </div>
                </div>
            </div> 
        </nav>
    )
}