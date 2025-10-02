"use client";
import { Sheet } from "react-modal-sheet";
import { useRef, useState } from "react";
import { useHomePageStore } from "@/stores/HomePageStore";

const snapPoints = [0, 0.5, 1];
const ContactMeDialog = () => {
  const { openDialog, setOpenDialog } = useHomePageStore();
  const ref = useRef(null);

  return (
    <>
      <Sheet
        ref={ref}
        style={{
          left: "51%",
          transform: "translateX(-50%)",
        }}
        initialSnap={1}
        detent="content"
        snapPoints={snapPoints}
        isOpen={openDialog}
        onClose={() => setOpenDialog(false)}
      >
        <Sheet.Container
        
          className="flex justify-center items-center max-w-2xl mx-auto"
          style={{ margin: "0 auto",zIndex: 9999 }}
        >
          <Sheet.Header className="bg-black" />
          <Sheet.Content className="bg-black w-full border flex justify-center  items-center text-white">
            {/* Your sheet content goes here */}
            <div className="h-[200px]"></div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop
          style={{ zIndex: 9998, }}
          onTap={() => setOpenDialog(false)}
        />
      </Sheet>
    </>
  );
};

export default ContactMeDialog;
