const AttendanceSummary = () => {
    return(
        <div class="min-w-sm shadow-sm p-2 mt-3 text-sm text-gray-800">
                <div class="flex justify-between items-center">
                    <span class="rounded py-1 px-3 bg-green-100 text-gray-800 ">Meeting</span>
                    <span class="text-gray-500 text-xs ">Wed. 15th December 2021</span>
                </div>
                <div class="h-4"></div>
                <div class="flex flex-col items-center md:flex-row justify-evenly ">
                    <div class="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span class="text-lg font-medium">72</span>
                        <span class="text-xs text-gray-500 font-light">Total Attendees</span>
                    </div>
                    <div class="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span class="text-lg font-medium">46</span>
                        <span class="text-xs text-gray-500 font-light">Absent Attendees</span>
                    </div>
                    <div class="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span class="text-lg font-medium">16</span>
                        <span class="text-xs text-gray-500 font-light">Late Attendees</span>
                    </div>
                    <div class="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span class="text-lg font-medium">₦1,600.00</span>
                        <span class="text-xs text-gray-500 font-light">Late Fee Collected</span>
                    </div>
                </div>
                
            </div>
    )
}

export default AttendanceSummary