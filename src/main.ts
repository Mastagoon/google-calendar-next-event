import { google } from "googleapis"
import dotenv from "dotenv"
import notifier from "node-notifier"
dotenv.config()
const { OAuth2 } = google.auth


const main = async () => {
    const oAuth2Client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
    oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })
    const calender = google.calendar({ version: 'v3', auth: oAuth2Client })
    console.log(new Date().toISOString())
    const events = await calender.events.list({ calendarId: 'primary', timeMin: new Date().toISOString(), orderBy: 'startTime', singleEvents: true })
    notifier.notify({
        title: "YO",
        message: "YAO"
    })
}

main()