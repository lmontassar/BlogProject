import { FaSearch } from "react-icons/fa";
export default function Search(){
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search for blogs..." /><FaSearch className="search-icon" />
        </div>
    );
}