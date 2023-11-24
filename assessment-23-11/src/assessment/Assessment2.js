import React, { useState, useEffect } from 'react'
import _ from 'lodash'

let MEDICINE_DATA_FOR_UPDATE =
    [
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2881,
            "medicine_taken": false,
            "created_at": "2023-11-20T18:30:00.000Z",
            "slot_time": "06:55 pm",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },

        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2883,
            "medicine_taken": false,
            "created_at": "2023-11-22T18:30:00.000Z",
            "slot_time": "03:55 pm",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2886,
            "medicine_taken": false,
            "created_at": "2023-11-28T18:30:00.000Z",
            "slot_time": "09:55 pm",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2890,
            "medicine_taken": false,
            "created_at": "2023-11-28T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2887,
            "medicine_taken": false,
            "created_at": "2023-11-29T18:30:00.000Z",
            "slot_time": "09:55 pm",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2891,
            "medicine_taken": false,
            "created_at": "2023-11-29T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2884,
            "medicine_taken": false,
            "created_at": "2023-12-18T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2888,
            "medicine_taken": false,
            "created_at": "2023-12-18T18:30:00.000Z",
            "slot_time": "09:55 pm",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2892,
            "medicine_taken": false,
            "created_at": "2023-12-18T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2885,
            "medicine_taken": false,
            "created_at": "2023-11-23T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2889,
            "medicine_taken": false,
            "created_at": "2023-11-23T18:30:00.000Z",
            "slot_time": "09:55 pm",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2893,
            "medicine_taken": false,
            "created_at": "2023-11-23T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        }, {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2882,
            "medicine_taken": false,
            "created_at": "2023-11-23T18:30:00.000Z",
            "slot_time": "06:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2882,
            "medicine_taken": false,
            "created_at": "2023-02-23T18:30:00.000Z",
            "slot_time": "06:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2882,
            "medicine_taken": false,
            "created_at": "2023-04-23T18:30:00.000Z",
            "slot_time": "06:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2882,
            "medicine_taken": false,
            "created_at": "2023-04-23T18:30:00.000Z",
            "slot_time": "06:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2882,
            "medicine_taken": false,
            "created_at": "2023-07-23T18:30:00.000Z",
            "slot_time": "06:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
    ]
const DAYS_ARRAY = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const MONTH_ARRAY = ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'];


const addIsExpired = (medicineArray) => {
    const currentDateTime = new Date();
    return medicineArray.map((medicine) => {
        const medicineDateTime = new Date(medicine.created_at);
        const slotDateTime = new Date(`${medicineDateTime.toDateString()} ${medicine.slot_time}`);
        const isExpired = currentDateTime > slotDateTime;
        return { ...medicine, isExpired };
    });
};


MEDICINE_DATA_FOR_UPDATE.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
const groupedByDate = _.groupBy(MEDICINE_DATA_FOR_UPDATE, (medicine) => {
    return new Date(medicine.created_at).toDateString();
});
const FINAL_MEDICINE_DATA = _.mapValues(groupedByDate, (medicineArray) => {
    return _.mapValues(_.groupBy(medicineArray, 'slot_time'), addIsExpired);
});

console.log(FINAL_MEDICINE_DATA);

function Assessment2() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isExpiredAllSlot, setIsExpiredAllSlot] = useState();

    useEffect(() => {
        const isExpiredArray = Object.keys(FINAL_MEDICINE_DATA).map((date) =>
            Object.keys(FINAL_MEDICINE_DATA[date]).every((slotTime) =>
                FINAL_MEDICINE_DATA[date][slotTime].every((medicine) => medicine.isExpired)
            )
        );
        setIsExpiredAllSlot(isExpiredArray);
        // console.log(isExpiredArray)
        const todayDateKey = new Date().toDateString();
        setSelectedDate(todayDateKey);
    }, []);

    function timeEventFinder(timeOn12Hour) {
        let time;
        if (timeOn12Hour.includes('pm')) {
            let a = timeOn12Hour.split(':')
            a[0] = Number(a[0]) + 12
            time = a.join(':').split(' ')[0]
        } else {
            time = timeOn12Hour.split(' ')[0]
        }
        // console.log(time)
        // console.log(typeof time)

        if (time >= '06:00' && time < '13:00') {
            return <i className="fa-solid text-yellow-400 fa-sun"></i>;
        } else if (time >= '13:00' && time < '17:00') {
            return '🕛';
        } else if (time >= '17:00' && time < '20:00') {
            return <i className="fa-solid fa-cloud-moon text-orange-500"></i>;
        } else if (time >= '20:00' || time < '06:00') {
            return <i className="fa-solid fa-moon text-blue-950"></i>;
        }
    }


    return (
        <div>
            <div className='flex flex-wrap w-[731px] rounded justify-start bg-gray-300'>
                {Object.keys(FINAL_MEDICINE_DATA).map((date, index) => (
                    <DayWiseToggleBtn
                        selectedDate={selectedDate}
                        date={date}
                        key={index}
                        onToggleClick={() => setSelectedDate(date)}
                        isAllExpired={isExpiredAllSlot && isExpiredAllSlot[index]}
                    />
                ))}
            </div>
            {selectedDate && FINAL_MEDICINE_DATA[selectedDate] && (
                <div className='w-full'>
                    {Object.keys(FINAL_MEDICINE_DATA[selectedDate]).map((slotTime) => (
                        <div className='my-2 rounded px-6 py-2 w-full justify-between flex bg-blue-600' key={slotTime}>
                            <div className='w-[625px]'>
                                <div className='flex justify-between'>
                                    <h1>{timeEventFinder(slotTime)}</h1>
                                    <p>{slotTime}</p>
                                </div>
                                <h1 className='text-xl text-start'>
                                    {FINAL_MEDICINE_DATA[selectedDate][slotTime].map((medicine, index) => (
                                        <div key={index}>{medicine.medicine_name}</div>
                                    ))}
                                </h1>
                            </div>
                                 {FINAL_MEDICINE_DATA[selectedDate][slotTime][0].isExpired && <div className='bg-red-800 rounded ml-1 w-[30px] h-[] '><i className="cursor-pointer fa-solid fa-chevron-down text-sm"></i></div>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Assessment2


function DayWiseToggleBtn({ date, onToggleClick, selectedDate, isAllExpired }) {
    let medicine_date = new Date(date)
    console.log(date)
    return (
        <div onClick={() => onToggleClick(date)} className={`m-2 shadow-md ${selectedDate === date ? 'bg-blue-500' : 'text-green-700 bg-white'} cursor-pointer rounded p-1 border bg flex flex-col  gap-1 px-3`}>
            <h1>{medicine_date.getDate()}-{MONTH_ARRAY[medicine_date.getMonth()]}</h1>
            <span>{DAYS_ARRAY[new Date(date).getDay()]}</span>
            <div className={`rounded w-[10px] h-[10px] ${isAllExpired ? 'bg-red-600' : 'bg-green-500'} mx-auto`}></div>
        </div>
    )
}