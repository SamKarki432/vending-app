import { Button, Flex , Heading, Input,FormLabel,FormControl,Divider,Text,HStack} from "@chakra-ui/react";

export default function EditProfile(){

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        const form = event.currentTarget;

    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <FormControl mb={3}>
                    <FormLabel htmlFor="user name">User Name</FormLabel>
                    <Input id="user_name" type="text" border={'solid'} />
            </FormControl>

            <FormControl mb={3}>
                    <FormLabel htmlFor="phone number">Phone Number</FormLabel>
                    <Input id="phone_number" type="tel" border={'solid'} />
            </FormControl>

            <FormControl mb={3}>
                    <FormLabel htmlFor="Address">Address</FormLabel>
                    <Input id="Address" type="text" border={'solid'} />
            </FormControl>
                    
            <Button colorScheme="blue" mb={5} type='submit'>Edit</Button>
        </form>
        </>
    )
}