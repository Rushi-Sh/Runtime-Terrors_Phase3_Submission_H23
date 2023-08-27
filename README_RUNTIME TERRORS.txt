RUNTIME TERRORS

(Kindly first Insert the CSV files into drive and then connect the drive to colab.)
IMPORTANT: note a patient ID from the given patient_data.csv file and enter it while running the python code.


Frontend:

1. You can open up the web-page names "new.html" along with files "new.css" and "new.js".


Backend:

Resource Allocation Algorithm for Patient-Hospital Assignment

This algorithm is designed to allocate patients to hospitals based on various factors including symptoms severity, hospital occupancy, available medical equipment, and patient demographics. The goal is to ensure that patients receive appropriate care while optimizing hospital resource utilization.

Algorithm Steps

1. Input: The algorithm takes two CSV files as input - one containing patient information (patients.csv)and another containing hospital information (hospitals.css).

2. Patient Assessment:
   - For each patient in `patients.csv`, assess their condition based on temperature,age and SpO2 levels.
   - Determine the appropriate category based on temperature and SpO2 levels: "Voluntary Quarantine," "ICU," "Special Ward," "Semi Special Ward," or "General Ward."

3. Hospital Selection:
   - Based on the patient's category, select suitable hospitals from `hospitals.csv`.
   - Prioritize hospitals with matching or nearby pincodes for patient assignment.
   -  Amongst all the hospitals details provided to the patient we also give our own personal suggestion.

4. Bed Allocation and Resource Management:
   - Reduce the available bed count in the selected hospital based on the patient's assignment.
   - Consider SpO2 availability when suggesting hospitals for patients with severe or moderate SpO2 levels.

5. Patient-Hospital Matching:
   - Match patients to hospitals based on the determined category and hospital availability.
   - Update the hospital's bed count after each assignment.

6. Output Generation:
   - Generate an output report indicating which patients are assigned to which hospitals.
   - Also visual depiction of the amount of beds are portrayed.

7. Outputs for goverment officials:
    - we are providing pie and bar graph to them on the trends of Age distributionof patients,Beds composition on basis of oxygen cylinders and Top 5 findings of covid             and other respiratory diseases

NOTE : All the outputs will be shown on the python file for now.

Considerations

- Ensure a trend from nearer to farther for suggested hospitals based on pincodes.
- Prioritize hospitals with better SpO2 availability for patients with severe/moderate SpO2 levels.
- Regularly update hospital bed counts to reflect the changing occupancy status.

This algorithm provides a systematic approach to allocate patients to hospitals while considering their conditions and optimizing resource utilization. It aims to provide timely and appropriate care to patients while managing hospital resources effectively.
