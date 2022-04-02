import dayjs from "dayjs"
import dotenv from "dotenv"
import { google } from "googleapis"
import notifier from "node-notifier"
import path from "path"
dotenv.config()
const { OAuth2 } = google.auth


const main = async () => {
    const oAuth2Client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
    oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })
    const calender = google.calendar({ version: 'v3', auth: oAuth2Client })
    const event = await calender.events.list({ calendarId: 'primary', timeMin: new Date().toISOString(), maxResults: 1, orderBy: 'startTime', singleEvents: true })
    const nextEvent = event.data
    const { start, end } = nextEvent.items![0]
    notifier.notify({
        title: "Next Event",
        message: `${nextEvent!.items![0].summary}\n${dayjs(start?.dateTime).format("hh:mm A")} - ${dayjs(end?.dateTime).format("hh:mm A")}` ?? "No Event",
        icon: path.join(__dirname, "..", "public", "assets", "icon.png"),
    })
    process.exit()
}

main()