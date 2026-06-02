"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignInPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Signed in successfully!");
    }
  };

  return (
    <Card className="border border-gray-200 mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
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

        <TextField isRequired name="password" type="password">
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <FieldError />
        </TextField>

        <p className="border-t mt-4 border-gray-200 pt-2 text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href={"/signup"}>
            <span className="font-bold text-purple-500 hover:underline cursor-pointer">
              Sign Up
            </span>
          </Link>
        </p>

        <div className="flex gap-4 justify-center mt-4">
          <Button
            className="text-sm px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            type="submit"
          >
            <Check />
            Sign In
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
  );
}
