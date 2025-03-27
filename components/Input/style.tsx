import { TextInput } from "react-native";
import styled from "styled-components/native";

type StyledInputProps = {
    hasError: boolean;
};

//Styled-components precisa do tipo ser explícito com uma função de callback
export const Input = styled(TextInput)<StyledInputProps>`
    background-color: #fff;
    font-size: 18px;
    padding: 20px;
    border: 2px solid ${({ hasError }: { hasError: boolean }) => hasError ? '#D72638' : '#33415C'};
    border-radius: 8px;
`;