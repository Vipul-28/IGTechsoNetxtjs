import {render,screen} from "@testing-library/react";
import Home from "@/app/(root)/(home)/page";
import UserCard from "@/components/UserCard";

it('should have data',()=>{
    render( <UserCard />);
    const myEle=screen.getByText("Rani Lakshmibai");
    expect(myEle).toBeInTheDocument();
})