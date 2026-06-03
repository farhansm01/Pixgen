"use client";

import { authClient } from "@/lib/auth-client";
import { PersonPencil } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

export function UpdateModal() {
  const [open, setOpen] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    setOpen(false);

    if (!error) {
      toast.success("successfully updated data!");
    } else {
      toast.error(error.message);
    }
  };

  return (
    <Modal isOpen={open} onOpenChange={setOpen}>
      <Button variant="secondary" onPress={() => setOpen(true)}>
        <PersonPencil /> Update Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <PersonPencil className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField
                    isRequired
                    className="w-full"
                    name="name"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField
                    isRequired
                    className="w-full"
                    name="image"
                    type="url"
                    variant="secondary"
                  >
                    <Label>Photo URL</Label>
                    <Input placeholder="Enter Photo URL" />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit">Save</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
