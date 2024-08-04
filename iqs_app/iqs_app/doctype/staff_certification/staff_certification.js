// Copyright (c) 2024, Yash Wadgaonkar and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Staff Certification", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('Staff Certification', {
    refresh: function (frm) {
        // Add the custom button to the form
        frm.add_custom_button(__('Renew Certificate'), function () {
            // Create and show the dialog
            frappe.prompt({
                label: 'New Expiration Date',
                fieldname: 'expiration_date',
                fieldtype: 'Date',
                reqd: 1
            }, function (values) {
                // Update the certificate's expiration date
                frm.set_value('expiration_date', values.expiration_date);
                frm.save_or_update(); // Save the changes
            }, 'Renew Certificate', 'Save');
        });
    }
});
