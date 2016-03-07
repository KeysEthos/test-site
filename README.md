# buzzMarketingSite
Buzz Marketing Site

echo '/dev/xvdb /data ext4 defaults,auto,noatime,noexec 0 0
/dev/xvdc /journal ext4 defaults,auto,noatime,noexec 0 0
/dev/xvdd /log ext4 defaults,auto,noatime,noexec 0 0' | sudo tee -a /etc/fstab
