import Post from "./Post";
import SideBar from "./SideBar";
import Stories from "./Stories";



export default function Corpo() {
    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <Post />
            </div>
            
                <SideBar />
            
        </div>
    )
}