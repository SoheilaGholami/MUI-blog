import Modal from "@mui/material/Modal";
import { theme } from "../styles/Theme";
import InputTitle from "../components/input/InputTitle";
import InputTag from "../components/input/InputTag";
import InputDescripton from "../components/input/InputDescripton";
import { SimpleButton } from "../components/button/SimpleButton";
import { ArrowBack } from "@mui/icons-material";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { PostContextType, PostType } from "../@types/post";
import { PostContext } from "../context/postContext";

type PostModalProps = {
  open: boolean;
  setOpenModal: any;
};
function PostModal({ open, setOpenModal }: PostModalProps) {
  const { savePosts } = useContext(PostContext) as PostContextType;
  const method = useForm<PostType>({
    defaultValues: {
      title: "",
      description: "",
      tags: [],
    },
  });
  const onSubmit = (data: PostType) => {
    savePosts(data);
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpenModal(false)}
      slotProps={{
        backdrop: { style: { backgroundColor: "rgba(255,255,255,0.2)" } },
      }}
      style={{
        backdropFilter: "blur(1px)",
      }}
    >
      <Box
        position={"absolute"}
        top={"25%"}
        left={"25%"}
        width={"50%"}
        minHeight={"60%"}
        display={"flex"}
        flexDirection={"column"}
        padding={theme.spacing(3)}
        sx={{ backgroundColor: "white" }}
      >
        <FormProvider {...method}>
          <form onSubmit={method.handleSubmit(onSubmit)}>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Stack
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                gap={theme.spacing(2)}
              >
                <Button
                  onClick={() => setOpenModal(false)}
                  sx={{
                    width: "auto",
                    border: "1px solid",
                    borderColor: theme.palette.secondary.light,
                    borderRadius: "100%",
                    padding: "10px",
                    minWidth: "0",
                    color: theme.palette.secondary.dark,
                  }}
                >
                  <ArrowBack />
                </Button>
                <Typography variant="h1" color={theme.palette.secondary.dark}>
                  New post
                </Typography>
              </Stack>
              <SimpleButton buttonTitle="Publish post" type={"submit"} />
            </Stack>
            <Typography
              variant="h6"
              marginTop={theme.spacing(3)}
              color={theme.palette.secondary.dark}
              padding={theme.spacing(0.5)}
            >
              Title
            </Typography>
            <InputTitle />
            <Typography
              variant="h6"
              marginTop={theme.spacing(3)}
              color={theme.palette.secondary.dark}
              padding={theme.spacing(0.5)}
            >
              Description
            </Typography>
            <InputDescripton />
            <Typography
              variant="h6"
              marginTop={theme.spacing(3)}
              color={theme.palette.secondary.dark}
              padding={theme.spacing(0.5)}
            >
              Tags
            </Typography>
            <InputTag />
          </form>
        </FormProvider>
      </Box>
    </Modal>
  );
}

export default PostModal;
