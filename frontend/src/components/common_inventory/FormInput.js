import {FormControl,FormLabel,FormErrorMessage,FormHelperText,Input} from '@chakra-ui/react'
function FormInput({lable,type="text",onChange,value}){


    return (
 <FormControl>
  <FormLabel>{lable}</FormLabel>
  <Input type={type}  onChange={onChange} width="100%" value={value}/>
 </FormControl>
    )
} 


export default FormInput;