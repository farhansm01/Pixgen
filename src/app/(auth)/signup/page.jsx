"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function SignUpPage() {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
  }, [user]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Account created successfully!");
      router.push("/signin");
    }
  };

  const handleGoogleSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <Card className="border border-gray-200 mx-auto w-125 py-10 mt-5 overflow-hidden">
        <h1 className="text-center text-2xl font-bold">Sign Up</h1>

        <Form className="flex w-full px-4 flex-col gap-4" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>
          <TextField isRequired name="image" type="text">
            <Label>Image URL</Label>
            <Input placeholder="Image URL" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex items-center my-2">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-3 text-sm text-gray-500">OR</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          <Button
            type="button"
            variant="bordered"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="20"
              height="20"
            >
              <path
                fill="#FFC107"
                d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
              />
              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14.7 15 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
              />
              <path
                fill="#4CAF50"
                d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.3 35.1 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
              />
              <path
                fill="#1976D2"
                d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.5-6.1 6.9l6.3 5.3C39.2 36.8 44 31 44 24c0-1.3-.1-2.4-.4-3.5z"
              />
            </svg>
            Continue with Google
          </Button>
          <p className="border-t mt-4 border-gray-200 pt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <Link href={"/signin"}>
              <span className="font-bold text-purple-500 hover:underline cursor-pointer">
                SignIn
              </span>
            </Link>
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <Button
              className="text-sm px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              type="submit"
            >
              <Check />
              Register
            </Button>
            <Button
              className="hover:border-2 hover:border-purple-500 transition-all duration-100 rounded-xl"
              type="reset"
              variant=" "
            >
              Reset
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
