import Blogs from "./blogs";
import Search from "./search";

export default function Main(){
    return (
        <main className="container">
            <Search/>
            <Blogs/>
        </main>
    );
}