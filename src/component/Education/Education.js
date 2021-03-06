import React from 'react';
import EducationInfo from './EducationInfo/EducationInfo';

const Education = () => {
    const educationInfo = [
        {
            "id": 1,
            "name": "Junior School Certificate (JSC)",
            "Year": 2010,
            "Result": 3.93,
            "Institute": "Ashuganj Tap Bidyut Kendra High School"
        },
        {
            "id": 2,
            "name": "Secondary School Certificate (SSC)",
            "Year": 2013,
            "Result": 4.94,
            "Institute": "Ashuganj Tap Bidyut Kendra High School",
            "Subject": "Science"
        },
        {
            "id": 3,
            "name": "Higher Secondary Certificate (HSC)",
            "Year": 2015,
            "Result": 4.83,
            "Institute": "Border Guard Public School & College",
            "Subject": "Science"
        },
        {
            "id": 4,
            "Year": 2019,
            "name": "Bachelor of Science",
            "Subject": "Computer Science & Engineering",
            "Result": 3.21,
            "Institute": "Dhaka City College under National University",

        }
    ]
    return (
        <div>
            {
                educationInfo.map(info => <EducationInfo info={info} key={info.id}></EducationInfo>)
            }
        </div>
    );
};

export default Education;