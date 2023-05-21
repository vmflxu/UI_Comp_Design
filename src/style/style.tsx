import { styled } from "styled-components";

const BtnBorder = styled.button`
    cursor: pointer;
    border: 1px solid gray;
    border-radius: 15px;
    width: fit-content;
    height: fit-content;
    padding: 0px;
`
const BtnBG = styled.div`
    width: fit-content;
    height: fit-content;
    background-color: #cecece;
    border-radius: inherit;
`
const BtnSize = styled.div`
    width: 250px;
    height: 50px;
`
const BtnTextColor = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    color: black;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Default = ({ children }: { children: React.ReactNode }) => {
    return (
        <BtnBorder>
            <BtnBG>
                <BtnSize>
                    <BtnTextColor>
                        {children}
                    </BtnTextColor>
                </BtnSize>
            </BtnBG>
        </BtnBorder>
    );
}

export const Buttons = {
    Default
}