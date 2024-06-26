import { User } from "@supabase/supabase-js"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { useSignOut } from "@/queries/login"

interface Props {
	user: User
}

export default function UserAvatar({ user }: Props) {
	const signOut = useSignOut()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<span className="cursor-pointer">
					<Avatar>
						<AvatarImage src={user.user_metadata.avatar_url ?? ""} />
						<AvatarFallback>{user.user_metadata.name ?? ""}</AvatarFallback>
					</Avatar>
					<span className="sr-only">Toggle theme</span>
				</span>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => {}}>Profile</DropdownMenuItem>
				<DropdownMenuItem onClick={() => {}}>Settings</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={() => {
						signOut.mutate()
					}}
				>
					{signOut.isPending ? "Logging out..." : "Log out"}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
