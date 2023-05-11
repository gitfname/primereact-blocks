
import PrimeReact from "primereact/api"
PrimeReact.ripple = true

import { Menubar } from "primereact/menubar"
import { Button } from "primereact/button"
import { Image } from "primereact/image"
import { Badge } from "primereact/badge"

export default function NavBar() {

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home'
        },
        {
            label: 'Customers',
            icon: 'pi pi-fw pi-users',
            items: [
                {
                    label: 'Add New',
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-search'
                }

            ]
        },
        {
            label: 'Calendar',
            icon: 'pi pi-fw pi-calendar'
        },
        {
            label: 'Stats',
            icon: 'pi pi-fw pi-chart-line'
        }
    ];


    const startTemplate = (
        <div className="mr-6">
            <Image
                width="120px"
                alt=""
                src="https://blocks.primereact.org/demo/images/blocks/logos/bastion-700.svg"
            />
        </div>
    )

    const endTemplate = (
        <div className="flex items-center gap-x-0.5">
            <Button icon={<i className="pi pi-fw pi-inbox text-gray-600"></i>} text  className="!border-none !outline-none !ring-0" />
            <Button icon={<i className="pi pi-fw pi-bell text-gray-600 p-overlay-badge"><Badge severity="danger" className="!min-w-[6px] w-[6px] min-h-[6px] !h-[6px]" /></i>} text className="!border-none !outline-none !ring-0" />
            <Button text className="!border-none !outline-none !ring-0 py-2 grid place-items-center">
                <Image
                    width="30px"
                    alt=""
                    src="https://blocks.primereact.org/demo/images/blocks/avatars/circle/avatar-f-1.png"
                    className=""
                />
            </Button>
        </div>
    )

    return (
        <div className="w-full p-3">
            <Menubar model={items} start={startTemplate} end={endTemplate} />
        </div>
    )
}
