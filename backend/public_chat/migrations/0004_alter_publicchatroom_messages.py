# Generated by Django 3.2.6 on 2021-08-26 16:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('public_chat', '0003_auto_20210825_1926'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publicchatroom',
            name='messages',
            field=models.ManyToManyField(blank=True, to='public_chat.Message'),
        ),
    ]
