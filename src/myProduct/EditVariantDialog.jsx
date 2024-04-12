import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


const editdialog = ({ open, onClose, variant, onSave }) => {
    const [editedVariant, setEditedVariant] = useState({
        variantname: "",
        variantprice: "",
        variantstock: "",
    });

    useEffect(() => {
        if (variant) {
            setEditedVariant(variant);
        }
    }, [variant]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedVariant((prevVariant) => ({
            ...prevVariant,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onSave(editedVariant);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Variant</DialogTitle>
            <DialogContent>
                <TextField
                    name="variantname"
                    label="Variant Name"
                    value={editedVariant.variantname}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    name="variantprice"
                    label="Variant Price"
                    value={editedVariant.variantprice}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    name="variantstock"
                    label="Variant Stock"
                    value={editedVariant.variantstock}
                    onChange={handleInputChange}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSave} color="primary">Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default editdialog