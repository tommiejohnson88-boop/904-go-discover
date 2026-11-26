self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('push',event=>{
 let data={title:'904 Go Discover',body:'New entertainment near you.',url:'/'};
 try { if(event.data) data={...data,...event.data.json()}; } catch {}
 event.waitUntil(self.registration.showNotification(data.title,{
  body:data.body,icon:'/assets/brand/904-install-v3-192.png',badge:'/assets/brand/904-notification-badge-v2.png',tag:data.tag||'localpulse-alert',
  data:{url:data.url||'/'}
 }));
});
self.addEventListener('notificationclick',event=>{
 event.notification.close();
 const url=new URL(event.notification.data?.url||'/',self.location.origin);
 if(url.origin!==self.location.origin)return;
 event.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(async clients=>{
  for(const client of clients)if(new URL(client.url).origin===url.origin){if(client.url!==url.href)await client.navigate(url.href);return client.focus();}
  return self.clients.openWindow(url.href);
 }));
});
