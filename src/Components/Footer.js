import {
  Box,
  chakra,
  Container,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Logo = () => {
  return (
    <>
      <Link
        href={"/"}
        className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
      >
        <Image
          borderRadius="full"
          boxSize="40px"
          src="/logo.jpeg"
          alt="Dan Abramov"
        />
        <span className="ml-3 text-xl">Panavers Dao</span>
      </Link>
    </>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.900", "gray.900")}
      color={useColorModeValue("gray.400", "gray.400")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack direction={"row"} spacing={6}>
          <Link href={"/"} className=" hover:text-white">
            Home
          </Link>
          <Link href={"/courses"} className=" hover:text-white">
            Courses
          </Link>
          <Link href={"/syllabus"} className=" hover:text-white">
            Syllabus
          </Link>
          <Link href={"/contact"} className=" hover:text-white">
            Contact
          </Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2023 Panaverse Dao. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/Panaverse_edu"}
            >
              <FaTwitter className=" hover:text-white" />
            </SocialButton>
            <SocialButton
              label={"YouTube"}
              href={"https://www.youtube.com/@panaverse/streams"}
            >
              <FaYoutube className=" hover:text-white" />
            </SocialButton>
            <SocialButton
              label={"Facbook"}
              href={"https://www.facebook.com/groups/panaverse"}
            >
              <FaFacebook className=" hover:text-white" />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
