import { useState } from "react";

export function useModal(initialValue = false) {
    const [isOpen, setIsOpen] = useState(initialValue);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return [isOpen, openModal, closeModal];
}