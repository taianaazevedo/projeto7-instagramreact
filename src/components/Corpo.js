import Post from "./Post";
import SideBar from "./SideBar";
import Stories from "./Stories";



export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Post />
            </div>
            
                <SideBar />
            
        </div>
    )
}