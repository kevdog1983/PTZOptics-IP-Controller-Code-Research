// IE
function vlc_play_IE(m_addr, m_width, m_height)
{
	document.open();
	//document.write('<object type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" version="VideoLAN.VLCPlugin.2" id="vlc" width="960" height="540" events="True" classid="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" >');
	document.write('<object type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" version="VideoLAN.VLCPlugin.2" id="vlc" ');
	document.write(m_width + ' ' + m_height);
	document.write('events="True" classid="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" >');
	
	//document.write('<param name="mrl" value="rtsp://192.168.1.240/1" />');
	document.write('<param name="mrl" value=');
	document.write(m_addr + ' />');
	
	document.write('<param name="volume" value="50" />');
	document.write('<param name="autoplay" value="true" />');
	document.write('<param name="loop" value="false" />');
	document.write('<param name="fullscreen" value="false" />');
	document.write('<param name="toolbar" value="false" />');
	//document.write('<iframe name="action_zone" style="display:none"></iframe>');
	document.write('</object>');
	document.close();
}

// »ðºü ¹È¸è
function vlc_play_FireFox(m_addr, m_width, m_height)
{
	document.open();
	document.write('<object type="application/x-vlc-plugin" id="vlc" events="True" ');
	document.write(m_width + ' ' + m_height + '>');
	document.write('<param name="mrl" value="" />');
	document.write('<param name="volume" value="50" />');
	document.write('<param name="autoplay" value="false" />');
	document.write('<param name="loop" value="false" />');
	document.write('<param name="toolbar" value="false" />');
	document.write('<param name="fullscreen" value="false" />');
	document.write('</object>');

	vlc = document.getElementById("vlc");
	options = new Array(":aspect-ratio=16:9", ":rtsp-tcp", ":network-caching=300");
	id = vlc.playlist.add(url, "CoCo", options);
	vlc.playlist.playItem(id);	
	
	document.close();
}

// quicktime
function vlc_play_QuickTime(m_addr, m_width, m_height)
{
	document.open();
	
	m_addr = "rtsp://" + m_addr + "/2";
	document.write('<embed src="some.mov" width='+m_width+' height='+m_height+' controller="true" autoplay="true" scale="tofit" ShowStatusBar="false" type="video/quicktime" qtsrc='+url+' pluginspage="http://www.apple.com/quicktime/download/index.html"></embed>');
	
	document.close();
}

 function isInsalledIEVLC(){ 
        
        var vlcObj = null;
        var vlcInstalled= false;
        
        try {
            vlcObj = new ActiveXObject("VideoLAN.Vlcplugin.1"); 
            if( vlcObj != null ){ 
                vlcInstalled = true 
            }
        } catch (e) {
            vlcInstalled= false;
        }        
        return vlcInstalled;
 } 

function isInsalledFFVLC(){
 var numPlugins=navigator.plugins.length;
 for  (i=0;i<numPlugins;i++)
 {
      plugin=navigator.plugins[i];
      if(plugin.name.indexOf("VideoLAN") > -1 || plugin.name.indexOf("VLC") > -1)
    {            
         return true;
    }
 }
 return false;
}
