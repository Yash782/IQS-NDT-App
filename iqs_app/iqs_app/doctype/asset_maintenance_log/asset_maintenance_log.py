# Copyright (c) 2024, Yash Wadgaonkar and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class AssetMaintenanceLog(Document):
# Defining on submit funtion
	def on_submit(self):
		self.update_asset_register_dates()

# Updating dates in asset register
	def update_asset_register_dates(self):
		if self.asset_link:
			try:		
				#Fetching Asset Register
				asset = frappe.get_doc("Asset Register", self.asset_link)

				# Update the fields
				if self.valid_until_there_is_potential_damage == 1:
					asset.last_clibration = self.calibration_date
				else:
					asset.validity = self.new_validity
					asset.last_clibration = self.calibration_date

				#Saving the changes in asset register
				asset.save()
				frappe.db.commit()
			
			except Exception as e:
				frappe.log_error(message=str(e), title="Update Asset Register Error")
				frappe.throw(('Could not update the validity and last calibration date in asset register. Please try again.'))

