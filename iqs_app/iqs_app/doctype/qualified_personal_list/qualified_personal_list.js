// Copyright (c) 2024, Yash Wadgaonkar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Qualified Personal List", {
	refresh(frm) {
        frm.add_custom_button(__('Create Duplicate'), function() {
            create_duplicate(frm);
        });
	},
});