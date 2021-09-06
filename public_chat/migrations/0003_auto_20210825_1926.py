# Generated by Django 3.2.6 on 2021-08-25 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('public_chat', '0002_publicchatroom'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='publicchatroom',
            name='messages',
        ),
        migrations.AddField(
            model_name='publicchatroom',
            name='messages',
            field=models.ManyToManyField(to='public_chat.Message'),
        ),
    ]