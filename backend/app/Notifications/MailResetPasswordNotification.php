<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Routing\UrlGenerator;
use Illuminate\Support\Facades\Lang;

class MailResetPasswordNotification extends ResetPassword
{
    use Queueable;
    protected $pageUrl;
    public $token;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($token)
    {
        parent::__construct($token);
        $this->pageUrl = env('APP_FRONTEND_PASSWORD_RESET_URL', route('password.reset'));
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        if (static::$toMailCallback) {
            return call_user_func(static::$toMailCallback, $notifiable, $this->token);
        }

        if (static::$createUrlCallback) {
            $url = call_user_func(static::$createUrlCallback, $notifiable, $this->token);
        } else {

            $url = $this->pageUrl . '?token=' . $this->token
                . '&email=' . urldecode($notifiable->getEmailForPasswordReset());

//            $url = url($this->pageUrl, [
//                'token' => $this->token,
//                'email' => $notifiable->getEmailForPasswordReset(),
//            ], true);
        }

        return (new MailMessage)
            ->subject(Lang::get('passwords.mail_reset_title'))
            ->line(Lang::get('passwords.mail_reset_description'))
            ->action(Lang::get('passwords.mail_action'), $url)
            ->line(Lang::get('passwords.mail_link_expire', ['count' => config('auth.passwords.' . config('auth.defaults.passwords') . '.expire')]));
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
