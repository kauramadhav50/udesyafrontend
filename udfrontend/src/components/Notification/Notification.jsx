const Notification = () => {

    const notifications = [

        {
            id: 1,
            name: "Rahul Sharma",
            message: "liked your post",
            time: "2m"
        },

        {
            id: 2,
            name: "Amit Verma",
            message: "sent you a connection request",
            time: "10m"
        },

        {
            id: 3,
            name: "Priya Mehta",
            message: "commented on your post",
            time: "1h"
        },

        {
            id: 4,
            name: "Karan Singh",
            message: "accepted your connection request",
            time: "3h"
        }

    ];

    return (

        <div className="pb-20 md:pb-4">

            <div className="max-w-[700px] mx-auto px-2">


                <div className="bg-white border rounded-lg p-4 mb-3">

                    <h1 className="font-semibold text-lg">
                        Notifications
                    </h1>

                    <p className="text-sm text-gray-500">
                        Recent activity
                    </p>

                </div>



                <div className="flex flex-col gap-2">

                    {notifications.map((item) => (

                        <div
                            key={item.id}

                            className="bg-white border rounded-lg
                            p-3 flex gap-3 items-center">

                            <img
                                src="/logo.png"
                                className="w-12 h-12 rounded-full"
                            />

                            <div className="flex-1">

                                <p className="text-sm">

                                    <span className="font-semibold">
                                        {item.name}
                                    </span>

                                    {" "}
                                    {item.message}

                                </p>

                                <p className="text-xs text-gray-500">

                                    {item.time} ago

                                </p>

                            </div>

                        </div>

                    ))}

                </div>


            </div>

        </div>

    )

}

export default Notification;