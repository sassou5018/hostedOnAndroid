# Recycling Android Phones As Servers
Test it out [here](http://mobile.benahmed.tech). Please spam it i want to see how long till it crashes. (If it's not available that means the phone died/ crashed/ or my internet is down. I'll try keeping it on as long as possible)
___
I had an old Samsung Galaxy Grand Prime Plus (J2 Prime in other regions) laying around and decided to repurpose it as a server.
There are ways to sideboot into Linux on Android devices but it's riddled with compatibility issues so i decided against it.
Instead i'm using [Termux](https://termux.dev/en/) a sort of compatibility layer for Android to run specifically built packages and applications.
Now my Grand Prime maxes out at Android 6.0 which Termux barely supports so i'm locked to NodeJS v13.0 and Termux doesn't support Docker on non-rooted devices.
This is just a simple example proving that it's doable, nothing more.
The webserver has a single endpoint ("/") that returns the server's platform and some info about the request sender.
### Tutorial:

 - Install Termux from the [Google PlayStore](https://play.google.com/store/apps/details?id=com.termux&hl=en&gl=US) or download the [APK from their releases page on Github](https://github.com/termux/termux-app/releases).
 - Update your installed packages and package repositories inside termux. Just run:
 

       $ pkg update && pkg upgrade
       

 - (Optional) You can ssh into your Termux terminal from Windows/ Linux/ MacOs
	 - Just follow this [Tutorial](https://joeprevite.com/ssh-termux-from-computer/).

 - Install NodeJS (Or whatever else you prefer, just refer to [Termux's Github](https://wiki.termux.com/wiki/Package_Management) for the available packages)
 

 

       $ pkg install nodejs


 - Run whatever app you want...
___
#### In case you want to expose your server to the internet *(do it at your own risk)*:
Simplest way to do it is to expose the port the server is running on from your router's port forwarding settings, then add an A record pointing to your public IPAddress:port .
I'm not sure if NginX or other reverse proxies/ API gateways are available just check them out yourself if want to do it that way.

    
